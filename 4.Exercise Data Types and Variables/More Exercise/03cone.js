function solve(r, h) {
    let p = 3.1415926535898;
    let volume = (1 / 3) * p * r * r * h;

    //A = L + B = πrs + πr2 = πr(s + r) = πr(r + √(r2 + h2));
    //L = πrs = πr√(r2 + h2)
    //B = πr2

    let baseSurfaceArea = p * r * r;
    let lateralSurfaceArea = p * r * Math.sqrt(r * r + h * h);
    let area = baseSurfaceArea + lateralSurfaceArea;
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}