// exemplo de função utilizando os dados do banco

function media (resultado) {
    var mediaX = 0, mediaY = 0, mediaZ = 0, mediaDelay = 0;
    for (var i=0; i<resultado.length; i++) {
        mediaX += resultado[i].medicao.x;
        mediaY += resultado[i].medicao.y;
        mediaZ += resultado[i].medicao.z;
        mediaDelay += resultado[i].medicao.delay;
    }
    mediaX /= resultado.length;
    mediaY /= resultado.length;
    mediaZ /= resultado.length;
    mediaDelay /= resultado.length;
    //console.log({ mediaX, mediaY, mediaZ, mediaDelay });
    return mediaY;
}

module.exports = media;