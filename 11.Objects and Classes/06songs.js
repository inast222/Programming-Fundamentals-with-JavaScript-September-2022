function songs(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let newArray = [];
    let numberOfSongs = input.shift();
    let typeOfSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        newArray.push(song);
    }
    if (typeOfSong === "all") {
        newArray.forEach((i) => console.log(i.name));
    } else {
        let filtered = newArray.filter((i) => i.type === typeOfSong);
        filtered.forEach((i) => console.log(i.name));
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
)