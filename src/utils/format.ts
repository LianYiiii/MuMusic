// 格式化内容

// 格式化播放数字
export function formatCount(count: number) {
    if (count > 100000) {
        return Math.floor(count / 10000) + '万';
    } else {
        return count;
    }
}

// 格式化songlist图片
export function getImageSize(
    imgUrl: string,
    width: number,
    height: number = width
) {
    // 默认为正方形，传入第三个参数即为长方形
    return imgUrl + `?param=${width} x ${height}`;
}

// 格式化歌曲时间
export function formatSongTime(time: number) {
    const formatTime = Math.floor(time / 1000);
    let minutes = Math.floor(formatTime / 60);
    let seconds = formatTime % 60;
    // console.log(time, formatTime, minutes, seconds);

    let formatM = '';
    let formatS = '';
    if (minutes < 10) {
        formatM = '0' + minutes;
    } else {
        formatM = minutes + '';
    }
    if (seconds < 10) {
        formatS = '0' + seconds;
    } else {
        formatS = seconds + '';
    }
    return formatM + ' : ' + formatS;
}