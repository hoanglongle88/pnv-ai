export const AUTH_QUERY_KEY = {
  PROFILE: ['user-profile'],
};

export const USER_QUERY_KEY = {
  ALL: ['users'] as const,
  LIST: (params?: object) => ['users', params] as const,
  DETAIL: (id: string) => ['users', id] as const,
};

export const POST_QUERY_KEY = {
  ALL: ['posts'] as const,
  LIST: (params?: object) => ['posts', params] as const,
  DETAIL: (id: string) => ['posts', id] as const,
};
