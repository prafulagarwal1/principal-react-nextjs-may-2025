import { useCallback, useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import LoadingSpinner from "../../../common/LoadingSpinner/LoadingSpinner";
import ErrorAlert from "../../../common/ErrorAlert/ErrorAlert";

import Item from "./Item/Item";

import { getSessionsForWorkshop } from "../../../../services/sessions";
import ISession from "../../../../models/ISession";
import { voteForSession, VoteType} from "../../../../services/sessions";

interface Props {
    id: number
}

const SessionsList = ( { id } : Props ) => {
    const [loading, setLoading] = useState(true);
    const [sessions, setSessions] = useState<ISession[]>([]);
    const [error, setError] = useState<Error | null>(null);

    useEffect(
        () => {
            const helper = async () => {
                setLoading(true);

                try {
                    const sessions = await getSessionsForWorkshop(id);

                    setLoading(false);
                    setSessions(sessions);
                } catch (error) {
                    setLoading(false);
                    setError(error as Error);
                }
            };

            helper();
        },
        [id]
    );

    const vote = useCallback(
        async (
            sessionId: number,
            voteType: VoteType
        ) => {
            try {
                const updatedSession = await voteForSession(sessionId, voteType);
                setSessions(
                    sessions => sessions.map( s => s.id === sessionId ? updatedSession : s )
                );
                alert('You vote for session ' + updatedSession.name +' has been captured');
            } catch(error) {
                alert((error as Error).message);
            }
        },
        [voteForSession, setSessions]
    );

    return (
        <div>
            <h2>List of Sessions</h2>

            <hr />

            {loading && (
                <LoadingSpinner />
            )}

            {!loading && error && (
                <ErrorAlert err={error} />
            )}

            {!loading && !error && (
                <ListGroup>
                    {sessions.map((s, idx) => (
                        <ListGroup.Item key={s.id}>
                            <Item session={s} vote={(voteType)=> vote(s.id, voteType)} />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </div>
    );
};

export default SessionsList;