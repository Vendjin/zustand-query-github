import api from "../api/github";
import { QueryFunctionContext, useQuery, } from '@tanstack/react-query';
import { IRepos } from "./types";

const fetchRepos = async (ctx: QueryFunctionContext) => {
    const [_, githubUser] = ctx.queryKey;
    const { data } = await api.get<IRepos[]>(`users/${githubUser}/repos`)
    return data;
}


function useFetchRepositories(user: string) {
    return useQuery(['repos', user], fetchRepos)
}

export default useFetchRepositories;