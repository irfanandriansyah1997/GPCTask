import { RouteComponentProps } from 'react-router';
import { AuthReducerInterface } from '@/store/reducers/data/auth/interfaces/auth-reducer.interface';
import { SessionReducerInterface } from '@/store/reducers/data/session/interfaces/session-reducer.interface';

/**
 * View Model Abstract Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description Interface for definition view model abstract
 * @since 2019.09.16
 */
export interface ViewModelAbstractInterface {
    auth: AuthReducerInterface;
    session: SessionReducerInterface;
    router?: RouteComponentProps;
}
