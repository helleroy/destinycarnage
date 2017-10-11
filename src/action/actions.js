import { getMembershipsForCurrentUser } from '../service/BungieApi';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = () => {
    return getMembershipsForCurrentUser();
};
