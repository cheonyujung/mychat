package com.github.godnsheeps.mychat.util;

import java.util.function.Function;

/**
 * @author jcooky
 */
public class Functions {
    public static interface FunctionWithException<T, R> {
        R apply(T t) throws Throwable;
    }

    public static <T, R> Function<T, R>
    wrapError(final FunctionWithException<T, R> f) {
        return t -> {
            try {
                return f.apply(t);
            } catch (Throwable e) {
                throw new RuntimeException(e);
            }
        };
    }
}
