// This is a simple javascript problem form beecrowd
function sphere (radius){
    const pi = Math.PI;
    const power = Math.pow(radius, 3);
    const area = (4/3)*pi*power;
    const finalArea = area.toFixed(3);
    return finalArea;
}

const result = sphere(3);
console.log('VOLUME =',result);