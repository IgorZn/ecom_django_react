def rev():
    input = [chr(x) for x in range(97, 120)]
    print(input)

    for _ in range(len(input)):
        if((len(input) - 1) / 2 < _):
            break

        letter = input[_]
        print('index:', _, 'current:', letter, 'last:', input[(len(input) - 1) - _])
        input[_] = input[(len(input) - 1) - _]
        input[(len(input) - 1) - _] = letter

    return input


input = [chr(x) for x in range(97, 120)].reverse()
print(rev())
