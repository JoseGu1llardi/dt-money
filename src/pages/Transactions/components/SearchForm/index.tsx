import { useContext } from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { MagnifyingGlass } from "phosphor-react";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import { SearchFormContainer } from "./styles";

const searchSchema = z.object({
    query: z.string(),
});

type SearchFormInput = z.infer<typeof searchSchema>;

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionsContext);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchSchema)
    });

    async function handleSearchTransactions(data: SearchFormInput) {
        await fetchTransactions(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Search for transactions"
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Search
            </button>
        </SearchFormContainer>
    )
}