import functools


def my_dec(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("we\'re inside wrapper")
        return func(*args, **kwargs)
    return wrapper


def my_dec_args(*args, **kwargs):
    print('*args_my_dec_args>>', *args)

    print('*kwargs_my_dec_args>>', kwargs.get('value', 'some_func'))

    my_dic = {
        'some_func': lambda x: x*2
    }

    my_dic[kwargs.get('value', 'some_func')]()

    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print('*wrapper>>', *args)
            print('*wrapper>>', *kwargs)
            return func(*args, **kwargs)
        return wrapper
    return decorator


@my_dec
def say_hello(value, **kwargs):
    if kwargs:
        print(kwargs)
    print(value)


@my_dec_args(8, value=True)
def say_hi(val, **kwargs):
    print(val)


# say_hello("hi")
say_hi('say_hi__bar', bar='baaaaaaa')


def factorial(num):
    if num == 1:
        return 1
    return num * factorial(num-1)


def factorial_reducer(num):
    return functools.reduce(lambda x, y: x * y, [z for z in range(1, num+1)])


print(factorial(5))
print(factorial_reducer(5))

gen = (z for z in range(6))

print(gen)
for _ in gen:
    print(_)

print(next(gen))