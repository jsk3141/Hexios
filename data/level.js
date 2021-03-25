//bpm은 80 보다 커야함!!!
const level = [
    {
        name: "Tokyovania",
        logo: "❤",
        music: 236595088,
        bpm: 316, //실제 bpm이 아닌 한 박자의 길이(ms)
        theme_color: ['skyblue', '#c9e5ee', 'rgba(135, 206, 235, 0.1)'],
        volume: 50,
        delay: 0,
        note: {
            1: "  1                       1                       1             1   1                   1   1   1 1 1 111 1 1 111 1 1 111 1 1 111 1 1 111 1 1 111 1 1 111 1 1 1 1 1         1 1 1 1                                            111 1 1 111 1 1 111 1 1 111 1 1 11111111111111111111111111111111                ",
            2: "      2                       2                       2           2   2                   2   2          2   2   2   2   2   2   2   2   2   2   2   2   2          2 2 2 2         2 2 2 2                                       2   2   2   2   2   2   2   2                                                ",
            3: "          3                       3                       3             3   3                                                                                                               3 3 3 3         3 3 3 3                                                                                            ",
            4: "              4                       4                       4           4   4                                                                                                                     4 4 4 4         4 4 4 4                                                                                    ",
            5: "                  5                       5                                     5   5                                                                                                                                       5 5                                                                                ",
            6: "                      6                       6                                   6   6                                                                                                                                                                                                                        "
        },
        animation: {
            psize: 1,
            p: "                                                                                                                                                                                                                                                                                                               ",
        }
    },
    // {
    //     name: "光るなら",
    //     logo: "♫",//"🎹",
    //     music: 199188362,
    //     bpm: 174, //실제 bpm이 아닌 한 박자의 길이(ms)
    //     theme_color: ['#f7dfe3', '#eea972', 'rgba(238, 169, 114, 0.1)'],
    //     volume: 27,
    //     delay: 0,
    //     note: {
    //         1: "        1 1          1   1 1  1 1  1  1           1                          1  1     ",
    //         2: " 22     2        2     2    2       2           2                          2      2   ",
    //         3: " 3 3               3                      3   3                      3                ",
    //         4: "    4       4        4                       4                     4   4              ",
    //         5: "    5 5     5    5     5                                        5        5            ",
    //         6: "       6   6       6      6       6                           6               6       "
    //     },
    //     animation: {
    //         psize: 1,
    //         p: "                                                                                      ",
    //     }
    // },
    {
        name: "Unity",
        logo: "𝌻",
        music: 169508644,
        bpm: 143, //실제 bpm이 아닌 한 박자의 길이(ms)
        theme_color: ['#f5b3ff', '#fad9ff', 'rgba(250, 217, 255, 0.1)'],
        volume: 24,
        delay: 0,
        note: {
            1: " 1               1               1               1 1 1 1 1        1       1       1 1             1       1       1 1             1       1       1 1             1       1     1 1 1             1                           1   1                           1   1                           1   1              1 1 1 1 1       1       1       1 1             1       1       1 1             1       1       1 1             1       1     1 1                                   ",
            2: "         2               2               2                        2       2       2   2           2       2       2   2           2       2       2   2           2       2   2   2   2           2   2                   2   2   2   2                   2   2   2   2                   2   2   2   2                          2       2       2   2           2       2       2   2           2       2       2   2           2       2   2   2                                   ",
            3: " 3               3               3                                3       3       3     3         3       3       3     3         3       3       3     3         3       3 3     3     3             3   3           3   3           3   3           3   3           3   3           3   3           3   3                      3       3       3     3         3       3       3     3         3       3       3     3         3       3 3     3                                   ",
            4: "         4               4               4                        4       4       4       4       4       4       4       4       4       4       4       4       4     4 4       4       4               4   4   4   4                   4   4   4   4                   4   4   4   4                   4                      4       4       4       4       4       4       4       4       4       4       4       4       4     4 4       4                                   ",
            5: " 5               5               5                                5       5       5               5       5       5               5       5       5               5   5   5       5                           5   5                           5   5                           5   5                                              5       5       5               5       5       5               5       5       5               5   5   5       5                                   ",
            6: "         6               6               6                        6       6       6               6       6       6               6       6       6               6 6     6       6                                                                                                                                              6       6       6               6       6       6               6       6       6               6 6     6       6                                   "
        },
        animation: {
            psize: 2,
            p: " p       p       p       p       p       p       r                p       p       b               p       p       r               p       p       b               p   p   p   p   r               r       b       p       p       r       b       p       p       r       b       p       p       r              r               p       p       r               p       p       b               p       p       r               p   p   p   p   r                                   ",
        }
    },
    {
        name: "Time Lapse",
        logo: "⧗",
        music: 201112761,
        bpm: 236, //실제 bpm이 아닌 한 박자의 길이(ms)
        theme_color: ['#3bd16f', '#95fa98', 'rgba(149, 250, 152, 0.1)'],
        volume: 27,
        delay: 0,
        note: {
            1: " ============================    ========        1     1         1     1 ========1     1 ========1     1 ========================1     1               1       1 ==    1       1       1 ==    1       1       1 ==    1       1 ==    1       1 1     1 ============                ",
            2: "         ====================      2             ========          2     ========  2     ========  2     ========================  2             ==2     ==2       2     ==2       2     ==2     ==2     ==2       2       2       2     ==2       2     ============                ",
            3: "                 ============    ========            3                3  ========     3  ========     3  ========================     3               3  ==   3  ==   3  ==   3  ==   3       3       3  ==   3  ==   3  ==   3  ==   3  ==   3       3  ============                ",
            4: " ============================    4     4         ========         4     4======== 4     4======== 4     4======================== 4     4        ==     4       4==     4       4       4==     4==     4       4==     4==     4==     4       4 4     4============                ",
            5: "         ====================    ========          5                5    ========   5    ========   5    ========================   5            == 5    == 5       5       5    == 5       5    == 5    == 5       5       5       5       5       5    ============                ",
            6: "                 ============        6           ========            6   ========    6   ========    6   ========================    6               6       6       6   ==  6   ==  6       6       6       6       6   ==  6       6   ==  6       6   ============                "
        },
        animation: {
            psize: 1,
            p: " pt      pt      pt              p   p   p   p   p   p   p   p   r       p   p   r       p   p   b       r   r   r   r   r   r   r   r           m   p   m   p   m   p   m   p   m   p   m   p   m   p   m   p   m   p   m   p   m   p   m   p   b   p   r   r   r                   ",
        }
    },
]
