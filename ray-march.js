import * as THREE from "three";

const MAX_STEPS = 100;
const MAX_DIST = 100.00;

const GetDist = (p) => {
    const s = THREE.Vector4(0, 1, 6, 1);

    const sphereDist = p.sub(s).length();
    const planeDist = p.getComponent(1);

    const d = Math.min(sphereDist, planeDist);
    return d;
}

const rayMarch = (ro, rd) => {
    let dO = 0;

    for(let i = 0; i<MAX_STEPS; i++) {
        const p = ro + rd*dO;
        const dS = GetDist(p);
        dO += dS;
        if(dO>MAX_DIST || dS<SURF_DIST) break;
    }

    return dO;
}

