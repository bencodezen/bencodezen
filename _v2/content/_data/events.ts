enum Classification {
  workshop,
  talk,
  lightningTalk
}

enum EventType {
  meetup,
  conference
}

type EventLocation = string | 'Remote'

type IsoEventDate = string

interface PublicEvent {
  date: IsoEventDate
  type: EventType
  location: EventLocation
  classification: Classification
}
