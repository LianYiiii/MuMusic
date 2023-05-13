export interface LyricType {
    time: number,
    text: string
}

// 时间的正则表达式
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function ParseLyrics(lyricString: string) {
    // 每行的歌词由换行符切割
    const lines: string[] = lyricString.split('\n');

    // 解析每句歌词
    let lyrics: LyricType[] = [];

    for (const line of lines) {
        // 获取每组的时间
        // console.log('123' + line);
        // 匹配对应的时间格式
        const timeResult = timeRegExp.exec(line);
        // 返回样式： ['[04:03.34]', '04', '03', '34', index: 0, input: '[04:03.34]让你自由', groups: undefined]
        // console.log(timeResult);
        if (!timeResult) continue;

        const time1 = Number(timeResult[1]) * 60 * 1000;
        const time2 = Number(timeResult[2]) * 1000;
        const time3 = timeResult[3].length === 3 ? Number(timeResult[3]) : Number(timeResult[3]) * 10;

        const time = time1 + time2 + time3;


        // 获取每组的文本
        // 将格式中的时间内容直接替换成空格
        const text = line.replace(timeRegExp, '')

        lyrics.push({ time, text })
    }
    // console.log(lyrics);

    return lyrics
}