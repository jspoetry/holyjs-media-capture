import {
  BehaviorSubject,
  catchError,
  defer,
  delay,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  first,
  from,
  fromEvent,
  map,
  merge,
  Observable,
  startWith,
  Subject,
  switchMap,
  tap,
} from "rxjs";

const getDevices = () => from(navigator.mediaDevices.enumerateDevices());

const devicesUpdate$ = fromEvent(navigator.mediaDevices, "devicechange").pipe(
  delay(500),
  switchMap(getDevices),
);

const devices$ = merge(defer(getDevices), devicesUpdate$);

const createDevicesSubject = (kind: MediaDeviceKind) =>
  devices$.pipe(
    map((devices) => devices.filter((device) => device.kind === kind)),
  );

export const cameras$ = createDevicesSubject("videoinput");
export const microphones$ = createDevicesSubject("audioinput");
export const speakers$ = createDevicesSubject("audiooutput");

const createSelectedDeviceSubject = (
  deviceList: Observable<MediaDeviceInfo[]>,
) => {
  const deviceSubject = new BehaviorSubject("");

  deviceList
    .pipe(
      first(),
      map((devices) => devices.at(0)?.deviceId || ""),
      tap((device) => console.log(device)),
    )
    .subscribe((val) => {
      deviceSubject.next(val);
    });

  return deviceSubject;
};

export const selectedCamera$ = createSelectedDeviceSubject(cameras$);
export const selectedMicrophone$ = createSelectedDeviceSubject(microphones$);
export const selectedSpeaker$ = createSelectedDeviceSubject(speakers$);

export const selectCamera = (deviceId: string) =>
  selectedCamera$.next(deviceId);
export const selectMicrophone = (deviceId: string) =>
  selectedMicrophone$.next(deviceId);
export const selectSpeaker = (deviceId: string) =>
  selectedSpeaker$.next(deviceId);
