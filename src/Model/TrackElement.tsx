export class TrackElement {
    id: string
    name: string
    artist: string
    album: string

    constructor(id: string, name: string, artist: string, album: string) {
        this.id = id
        this.name = name
        this.artist = artist
        this.album = album
      }
}

export const DummyData: TrackElement[] = [new TrackElement("test", "Funky Town", "No idea", "some album"),
                                          new TrackElement("test1", "Funky Town", "No idea", "some album"),
                                          new TrackElement("test2", "Funky Town", "No idea", "some album")]