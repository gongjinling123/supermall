module.exports = {
  postcss: {
    plugins: [
        autoprefixer(),
        pxtovw({
            viewportWidth: 750, 
            viewportHeight: 1334,  
            unitPrecision: 3, 
            viewportUnit: 'vw', 
            selectorBlackList: ['.ignore', '.hairlines'], 
            minPixelValue: 1, 
            mediaQuery: false 
        })
    ]
}
  
 
}
