---
title: Is it redundant to include a base tag in Obsidian?
date: 2021-07-20T20:27:32
type: post
blog: true
---

> 🎩 Credit goes to @ADubhlaoich for the original question!

## TL;DR

Yep. The tagging system in Obsidian is built on "generational relationships" so that all subsequent tags in a generation are inherently included in the previous tags.

## Tell me more...

### Prove that it's automatically included

If we utilize the [Obsidian Dataview Plugin](https://blacksmithgu.github.io/obsidian-dataview/), we can expose all the tags that are contained within a given file. Using only the search parameter for `#type/blog`, you'll see in this screenshot that the root tag of `#type` is included in the list of available tags.

    ```dataview
    TABLE file.tags
    FROM #type/blog
    ```

<BlogImage src="/images/2021/is-it-redundant-to-include-a-base-tag.png" alt="Screenshot of Obsidian Dataview results for tags"></BlogImage>

### What are "generational relationships"?

When you create a tag such as `#psychology/positive`, this is often referred to as a "parent-child" relationship. In other words, `positive` is a child of `psychology` and is strictly bound to that tag.

If we were to create another tag such as `#charge/positive`, while this contains the same "child" as `#psychology/positive`, it is considered to exist in an entirely different family of ideas (i.e., there is no relationship between the two).

The reason I'm calling this a "generational" relationship rather than a mere "parent-child" relationship is because it can theoretically go on infinitely.

If we were three levels deep, such as `#psychology/positive/therapy`, you'd now have a:

- Grandparent: `psychology`
- Parent: `positive`
- Child: `therapy`

With no technical limit on how many times you can add a new subtag, this is why I've called it "generational" relationship.

## Final Thoughts

Of course, it's worth remembering that at the end of the day, while it may be "technically" redundant, the most important thing is whether it feels most natural for you to include it. Happy note-taking!
