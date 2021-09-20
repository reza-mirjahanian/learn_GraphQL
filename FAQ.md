
### Why should I use GraphQL?
It depends on your use case, but in general, GraphQL has a few key features that stand out. For example, GraphQL enables you to:
- Get many resources in a single request
- Describe what’s possible with a type system
- Evolve your API without versions
- Aggregate data from  [multiple UI components](https://graphql.org/learn/queries/#fragments).
-  Create a representation of your data that feels familiar and natural ([a graph](https://graphql.org/learn/thinking-in-graphs/#it-s-graphs-all-the-way-down)).
-   Ensure that all of your data is  [statically typed](https://graphql.org/learn/schema/)  and these types inform  [what queries the schema supports](https://graphql.org/learn/introspection/).
-   [Reduce the need for breaking changes](https://graphql.org/learn/best-practices/#versioning), but utilize a  [built-in mechanism for deprecations](https://spec.graphql.org/draft/#sec-Deprecation)  when you need to.
-   Access to a  [powerful tooling ecosystem](https://graphql.org/code/#generic-tools)  with GUIs, editor integrations, code generation, linting, analytics, and more.

[Our homepage](https://graphql.org/)  outlines even more reasons to use GraphQL.

You can try out GraphQL without rewriting your entire application. For instance, starting with a single HTTP request that wraps an existing REST call. Your  [GraphQL schema](https://graphql.org/learn/thinking-in-graphs/#shared-language)  and  [business domain model](https://graphql.org/learn/thinking-in-graphs/#business-logic-layer)  can expand gradually. We recommend focusing on one use case at first and only building the part of the schema needed for that.

### Does GraphQL replace REST?
No, not necessarily. They both handle APIs and can serve similar purposes from a business perspective. GraphQL is often considered an alternative to REST, but it’s not a definitive replacement.

GraphQL and REST can actually co-exist in your stack. For example, you can abstract REST APIs behind a GraphQL server. This can be done by masking your REST endpoint into a GraphQL endpoint using root resolvers.

For an opinionated perspective on how GraphQL compares to REST, check out How To GraphQL.
