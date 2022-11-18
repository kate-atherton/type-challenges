type TupleToUnion<T extends any[]> = T extends Array<infer U> ? U : never
