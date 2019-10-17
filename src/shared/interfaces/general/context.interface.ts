import { AuthReducerInterface } from '@/store/reducers/data/auth/interfaces/auth-reducer.interface';
import { SessionReducerInterface } from '@/store/reducers/data/session/interfaces/session-reducer.interface';

/**
 * Base Default Context Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interface for definition default context api
 * @since 2019.09.16
 */
export interface BaseDefaultContext {
    auth: AuthReducerInterface;
    session: SessionReducerInterface;
}
