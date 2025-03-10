pub fn safe_char(c: char) -> Option<char> {
    match c {
        c if c.is_ascii_alphabetic() => Some(c.to_ascii_lowercase()),
        c if c.is_ascii_whitespace() => Some('-'),
        _ => None,
    }
}

pub fn make_string_safe(input: &str) -> String {
    let mut last_char = None;
    let mut safe_string = String::with_capacity(input.len());
    for new_char in input.chars().filter_map(safe_char) {
        if last_char == Some(new_char) && last_char == Some('-') {
            continue;
        }
        last_char = Some(new_char);
        safe_string.push(new_char);
    }
    safe_string
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_safe_char() {
        let lower_case = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
            'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        ];
        let upper_case = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
            'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        ];
        let inexhaustive_white_space = [' ', '\t', '\n', '\r'];
        let inexhaustive_other_characters = [
            '!', '@', '£', '$', '%', '^', '&', '*', '(', ')', '¡', '€', '#', '¢', '∞', '§', '¶',
            '•', 'ª', 'º', '🦀',
        ];

        // lowercase characters are unchanged
        lower_case
            .iter()
            .copied()
            .for_each(|l| assert_eq!(safe_char(l), Some(l), "Initial value: {l}"));

        // uppercase characters are lowercased
        upper_case
            .iter()
            .copied()
            .zip(lower_case.iter().copied())
            .for_each(|(u, l)| assert_eq!(safe_char(u), Some(l), "Initial value: {u}"));

        // whitespace becomes `-`
        inexhaustive_white_space
            .iter()
            .copied()
            .for_each(|w| assert_eq!(safe_char(w), Some('-'), "Initial value: {w:?}"));

        // other characters are removed
        inexhaustive_other_characters
            .iter()
            .copied()
            .for_each(|c| assert_eq!(safe_char(c), None, "Initial value: {c}"));
    }

    #[test]
    fn test_make_string_safe() {
        assert_eq!(make_string_safe("Hello,   world!"), "hello-world");
    }
}
