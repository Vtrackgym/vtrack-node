type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

interface RequestOptions {
    method?: HttpMethod
    body?: unknown
    token?: string
    headers?: Record<string, string>
}