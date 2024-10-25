// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, signInWithPopup, GithubAuthProvider, browserSessionPersistence, setPersistence } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, setDoc, getDocs, updateDoc, doc, collection, query, where } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyB-X40XzV46uZxdejv9sb7TR0pLz4XslPc",
    authDomain: "wxdash.firebaseapp.com",
    projectId: "wxdash",
    storageBucket: "wxdash.appspot.com",
    messagingSenderId: "370716619107",
    appId: "1:370716619107:web:da1ce358363390d69ba356",
    measurementId: "G-MSYC1NMSME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GithubAuthProvider();
const auth = getAuth();
const db = getFirestore(app);
let user;
for (var key in sessionStorage) {
    if (key.includes("firebase:authUser")) {
        user = JSON.parse(sessionStorage.getItem(key));
    }
}
if (user == null) {
    let loginDiv = document.createElement("div");
    let loginBtnImg = document.createElement("img");
    loginBtnImg.src = "src/img/github-mark/github-mark.png";
    loginBtnImg.id = "loginImg";
    let loginBtn = document.createElement("button");
    loginBtn.append(loginBtnImg)
    loginBtn.id = "loginBtn"
    loginBtn.innerText = `Login with Github`;
    loginBtn.addEventListener("click", function () {
        signIn();
    })
    loginBtn.append(loginBtnImg)
    loginDiv.append(loginBtn);
    document.getElementById("headerH").append(loginDiv)
}
else {
    let loginDiv = document.createElement("div");
    let loginBtnImg = document.createElement("img");
    loginBtnImg.src = "src/img/github-mark/github-mark.png";
    loginBtnImg.id = "loginImg";
    let loginBtn = document.createElement("button");
    loginBtn.append(loginBtnImg)
    loginBtn.id = "loginBtn"
    loginBtn.innerText = user.displayName;
    loginBtn.append(loginBtnImg)
    loginDiv.append(loginBtn);
    document.getElementById("headerH").append(loginDiv)
}
function signIn() {
    setPersistence(auth, browserSessionPersistence).then(
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                user = result.user;
                $('#loginBtn').text(user.displayName);
                const userRef = collection(db, "Users");
                const q = query(userRef, where("uid", "==", user.uid));
                const validUser = fetchData(q)
                async function fetchData(q) {
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        if (doc.data().uid) {
                            return true;
                        }
                    });
                }
                if (!validUser) {
                    try {
                        setDoc(doc(db, "Users", user.uid), {
                            basemap: localStorage.getItem('basemap') ? localStorage.getItem('basemap') : localStorage.setItem('basemap', "CartoDB_DarkMatter"),
                            layers: localStorage.getItem('layers') ? localStorage.getItem('layers') : localStorage.setItem('layers', JSON.stringify([
                                {
                                    "name": "NOAA SPOT",
                                    "visible": false
                                },
                                {
                                    "name": "1 Day Fire Forecast",
                                    "visible": false
                                },
                                {
                                    "name": "Tropical Weather Outlook",
                                    "visible": false
                                },
                                {
                                    "name": "NOAA METAR",
                                    "visible": false
                                },
                                {
                                    "name": "Current RADAR Weather",
                                    "visible": false
                                }
                            ])),
                            location: localStorage.getItem('location') ? localStorage.getItem('location') : localStorage.setItem('location', JSON.stringify({
                                "lat": 30,
                                "lng": -40
                            })),
                            firsttime: localStorage.getItem('firsttime') ? localStorage.getItem('firsttime') : localStorage.setItem('firsttime', 'true'),
                            zoom: localStorage.getItem('zoom') ? localStorage.getItem('zoom') : localStorage.setItem('zoom', 3),
                            lastvisit: localStorage.getItem('lastvisit') ? localStorage.getItem('lastvisit') : localStorage.setItem('lastvisit', Date.now()),
                            mapsize: localStorage.getItem('mapsize') ? localStorage.getItem('mapsize') : localStorage.setItem('mapsize', "100%"),
                            collectionsize: localStorage.getItem('collectionsize') ? localStorage.getItem('collectionsize') : localStorage.setItem('collectionsize', "100%")
                        });
                    } catch (e) {
                        console.error('Error adding document: ', e);
                    }
                    return credential
                }
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
            }));
}

map.on("zoom", function () {
    if (user) {
        updateDoc(doc(db, "Users", user.uid), {
            zoom: map.getZoom()
        });
    }
});
map.on("dragend", function () {
    if (user) {
        updateDoc(doc(db, "Users", user.uid), {
            location: JSON.stringify(map.getCenter())
        });
    }
});
map.on("baselayerchange", function (baseMapLayer) {
    if (user) {
        updateDoc(doc(db, "Users", user.uid), {
            basemap: baseMapLayer.name
        });
    }
});
map.on('overlayadd', function () {
    if (user) {
        updateDoc(doc(db, "Users", user.uid), {
            layers: JSON.stringify(layerControl.getOverlays())
        });
    }
});
map.on('overlayremove', function (layers) {
    if (user) {
        updateDoc(doc(db, "Users", user.uid), {
            layers: JSON.stringify(layerControl.getOverlays())
        });
    }
});
map.on("resize", function () {
    console.log(map.getSize())
})
var mapWidth;
var collectionSize;
var maxWidthMap = window.availWidth;
function mapResize(textbox) {
    mapWidth = textbox[0].contentBoxSize[0].inlineSize;
    if (mapWidth > window.screen.availWidth) {
        document.getElementById('mapid').style.width = "100%"
    }
    document.getElementById('list-container').style.width = (window.screen.availWidth - mapWidth - 28) + "px";
    collectionSize = (window.screen.availWidth - mapWidth - 28) + "px";
    map.invalidateSize();
}
new ResizeObserver(mapResize).observe(document.getElementById('mapid'));
new ResizeObserver(mapResize).observe(document.body);
