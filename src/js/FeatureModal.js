modal = document.getElementById('featureModal');
v = [];
let n;
let f;

for (version in versions) {
    v.push(version)
}
n = v.at(-1);
f = versions[v.at(-1)]
modal.innerHTML = `<h2 class="newFeatureTitle">New Features: v${v.at(-1)}</h2>`;

for (a in f['features']) {
    let comment = f["features"][a];
    let div = document.createElement("div");
    div.innerHTML += '<p style="text-decoration: underline">' + a + '<p>' + f['features'][a] + '</p></p>';
    modal.append(div);
}