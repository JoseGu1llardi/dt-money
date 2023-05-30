import { useContextSelector } from "use-context-selector";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { MagnifyingGlass } from "phosphor-react";

import { TransactionsContext } from "../../../../contexts/TransactionsContext";

import { SearchFormContainer } from "./styles";

/**
 * Why does a component render?
   -- Hooks changed (chenged state, context, reducer, etc);
   -- Props changed;
   -- Parent re-rendered (rendered parent component);
   
 * What is the rendering flow?
   -- 1. React recreates the HTML of that component's interface;
   -- 2. Compares the recreated version of HTML with the previous version versions;
   -- 3. If there was any change, it rewrites the HTML on the screen (extremely fast);
   
 * Memo:
   -- 0.0 Hooks changed, Props changed (deep comparison);
   -- 0.1 Compare previous versions of hooks and props;
   -- 0.2 If something has changed, it will allow the new rendering;
 */

const searchSchema = z.object({
    query: z.string(),
});

type SearchFormInput = z.infer<typeof searchSchema>;

export function SearchForm() {
    const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions
    });

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