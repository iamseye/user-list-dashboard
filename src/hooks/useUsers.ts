import { UserType } from "../types/user.type";
import { useFetch, API_URL } from "./useFetch";

interface userApiResponse {
  data: UserType[];
}

export const getUsername = (user: UserType): string =>
  `${user.name.firstName} ${user.name.lastName}`;

const defaultUserSorting = (a: UserType, b: UserType) => {
  const nameA = getUsername(a).toLowerCase();
  const nameB = getUsername(b).toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return a.age - b.age;
};

type useUsersType = {
  minAge?: number;
  maxAge?: number;
  sort?: "Name" | "Age";
  orderBy?: "ASC" | "DES";
} | null;

export const useUsers = (searchProps: useUsersType = null) => {
  const { minAge, maxAge, sort, orderBy } = searchProps || {};
  const {
    data: kidsData,
    error: kidsFetchError,
    isLoading: kidsFetchIsLoading,
  } = useFetch<userApiResponse>(`${API_URL}/users/kids`);

  const {
    data: adultData,
    error: adultFetchError,
    isLoading: adultFetchIsLoading,
  } = useFetch<userApiResponse>(`${API_URL}/users/adults`);

  const {
    data: seniorData,
    error: seniorFetchError,
    isLoading: seniorFetchIsLoading,
  } = useFetch<userApiResponse>(`${API_URL}/users/seniors`);

  const kidUsers = kidsData?.data || [];
  const adultUsers = adultData?.data || [];
  const seniorUsers = seniorData?.data || [];

  const users = [...kidUsers, ...adultUsers, ...seniorUsers];

  const isLoading =
    kidsFetchIsLoading || adultFetchIsLoading || seniorFetchIsLoading;

  const error = kidsFetchError || adultFetchError || seniorFetchError;

  if (!sort && !orderBy) {
    users.sort(defaultUserSorting);
  }

  // sort by individual name or age

  if (maxAge || minAge) {
    const filteredUsers = users.filter((user) => {
      if (maxAge && minAge) {
        return user.age <= maxAge && user.age >= minAge;
      }
      if (maxAge) {
        return user.age <= maxAge;
      }

      if (minAge) {
        return user.age >= minAge;
      }
    });

    return {
      users: filteredUsers,
      isLoading,
      error,
    };
  }

  return {
    users,
    isLoading,
    error,
  };
};
