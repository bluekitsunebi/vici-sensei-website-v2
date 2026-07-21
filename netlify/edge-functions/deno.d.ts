declare class HTMLRewriter {
  on(selector: string, handlers: { element(element: { setInnerContent(content: string): void }): void }): HTMLRewriter;
  transform(response: Response): Response;
}
