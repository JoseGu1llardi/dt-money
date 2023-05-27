import { useForm } from "react-hook-form";

import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
    query: z.string(),
});

type SearchFormInput = z.infer<typeof searchSchema>;

export function SearchForm() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInput>({
        resolver: zodResolver(searchSchema)
    });

    async function handleSearchTransactions(data: SearchFormInput) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log(data.query);
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