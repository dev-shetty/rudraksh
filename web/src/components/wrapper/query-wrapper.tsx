"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface Props {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const QueryWrapper = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
export default QueryWrapper
