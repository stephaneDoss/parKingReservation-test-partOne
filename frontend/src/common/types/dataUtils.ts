/**
 *  @see https://dev.to/madflanderz/how-to-get-parts-of-an-typescript-interface-3mko
 */
const languages = ["de", "en", "fr", "it"] as const;
// extract type from languages above
type Language = typeof languages[number];

/**
 *  @see https://codyarose.com/blog/object-keys-from-array-in-typescript/
 */
const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

type Values = { [K in typeof sizes[number]]: number };

// extract type from languages above
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DontUse = any;
