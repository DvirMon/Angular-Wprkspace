import { Injector, inject, runInInjectionContext, } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState } from '@ngrx/signals';
import { addEntities, setAllEntities } from '@ngrx/signals/entities';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, pipe, switchMap } from 'rxjs';
function getKey(collection) {
    return collection == 'entities' ? collection : collection + 'Entities';
}
// Function to handle the success response of loading entities
export function handleLoadEntitiesSuccess(state, collection) {
    return (res) => {
        const key = getKey(collection);
        const localState = state;
        const hasEntities = localState[key]()?.length > 0;
        const update = hasEntities ? setAllEntities : addEntities;
        if (key === 'entities') {
            patchState(state, update(res.content));
        }
        else {
            patchState(state, update(res.content, { collection }));
        }
    };
}
export function createLoader(Loader, methodName) {
    return runInInjectionContext(inject(Injector), () => {
        const loader = inject(Loader);
        return (query) => loader[methodName](query);
    });
}
export function loadEntities(loader, state, collection = 'entities') {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: handleLoadEntitiesSuccess(state, collection),
        error: () => EMPTY,
    })))));
}
export function createSliceLoader(Loader, methodName) {
    return runInInjectionContext(inject(Injector), () => {
        const loader = inject(Loader);
        return (query) => loader[methodName](query);
    });
}
export function loadSlice(loader, state, slice) {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: (res) => patchState(state, { [slice]: res.content }),
        error: () => EMPTY,
    })))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc3JjL2xpYi9kb20vaGVscGVycy9lbnRpdGllcy5oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxRQUFRLEVBR1IsTUFBTSxFQUNOLHFCQUFxQixHQUN0QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQVksV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFjLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFvQjFELFNBQVMsTUFBTSxDQUFDLFVBQWtCO0lBQ2hDLE9BQU8sVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3pFLENBQUM7QUFFRCw4REFBOEQ7QUFDOUQsTUFBTSxVQUFVLHlCQUF5QixDQUN2QyxLQUFjLEVBQ2QsVUFBa0I7SUFFbEIsT0FBTyxDQUFDLEdBQXlCLEVBQUUsRUFBRTtRQUNuQyxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsTUFBTSxVQUFVLEdBQUcsS0FBOEMsQ0FBQztRQUNsRSxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFFMUQsSUFBSSxHQUFHLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDdkIsVUFBVSxDQUFDLEtBQTRCLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7YUFBTSxDQUFDO1lBQ04sVUFBVSxDQUNSLEtBQTRCLEVBQzVCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FDcEMsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsTUFBOEMsRUFDOUMsVUFBa0I7SUFFbEIsT0FBTyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FDMUIsTUFBc0QsRUFDdEQsS0FBMEIsRUFDMUIsVUFBVSxHQUFHLFVBQVU7SUFFdkIsT0FBTyxRQUFRLENBQ2IsSUFBSSxDQUNGLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ2hCLFdBQVcsQ0FBQztRQUNWLElBQUksRUFBRSx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO1FBQ2xELEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLO0tBQ25CLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FDRixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsTUFBOEMsRUFDOUMsVUFBa0I7SUFFbEIsT0FBTyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsTUFBc0QsRUFDdEQsS0FBMEIsRUFDMUIsS0FBYTtJQUViLE9BQU8sUUFBUSxDQUNiLElBQUksQ0FDRixTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNoQixXQUFXLENBQUM7UUFDVixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSztLQUNuQixDQUFDLENBQ0gsQ0FDRixDQUNGLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RvcixcbiAgUHJvdmlkZXJUb2tlbixcbiAgU2lnbmFsLFxuICBpbmplY3QsXG4gIHJ1bkluSW5qZWN0aW9uQ29udGV4dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YXBSZXNwb25zZSB9IGZyb20gJ0BuZ3J4L29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVNpZ25hbCwgcGF0Y2hTdGF0ZSB9IGZyb20gJ0BuZ3J4L3NpZ25hbHMnO1xuaW1wb3J0IHsgRW50aXR5SWQsIGFkZEVudGl0aWVzLCBzZXRBbGxFbnRpdGllcyB9IGZyb20gJ0BuZ3J4L3NpZ25hbHMvZW50aXRpZXMnO1xuaW1wb3J0IHsgcnhNZXRob2QgfSBmcm9tICdAbmdyeC9zaWduYWxzL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSwgcGlwZSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5IHtcbiAgaWQ6IEVudGl0eUlkO1xufVxuXG5leHBvcnQgdHlwZSBFbnRpdHlNYXAgPSBSZWNvcmQ8RW50aXR5SWQsIEVudGl0eT47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVzdWx0PEVudGl0eT4ge1xuICBjb250ZW50OiBFbnRpdHlbXTtcbn1cblxuZXhwb3J0IHR5cGUgTG9hZGVyPFQsIEVudGl0eSwgTWV0aG9kTmFtZSBleHRlbmRzIHN0cmluZz4gPSB7XG4gIFtLIGluIE1ldGhvZE5hbWVdOiAoYXJnczogVCkgPT4gT2JzZXJ2YWJsZTxFbnRpdHlSZXN1bHQ8RW50aXR5Pj47XG59O1xuXG5leHBvcnQgdHlwZSBMb2FkZXJTZXJ2aWNlPFQ+ID0gUHJvdmlkZXJUb2tlbjxUPjtcblxuZXhwb3J0IHR5cGUgTG9hZFNlcnZpY2U8TG9hZGVyPiA9IFByb3ZpZGVyVG9rZW48TG9hZGVyPjtcblxuZnVuY3Rpb24gZ2V0S2V5KGNvbGxlY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjb2xsZWN0aW9uID09ICdlbnRpdGllcycgPyBjb2xsZWN0aW9uIDogY29sbGVjdGlvbiArICdFbnRpdGllcyc7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgc3VjY2VzcyByZXNwb25zZSBvZiBsb2FkaW5nIGVudGl0aWVzXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTG9hZEVudGl0aWVzU3VjY2VzczxFbnRpdHkgZXh0ZW5kcyB7IGlkOiBFbnRpdHlJZCB9PihcbiAgc3RhdGU6IHVua25vd24sXG4gIGNvbGxlY3Rpb246IHN0cmluZ1xuKSB7XG4gIHJldHVybiAocmVzOiBFbnRpdHlSZXN1bHQ8RW50aXR5PikgPT4ge1xuICAgIGNvbnN0IGtleTogc3RyaW5nID0gZ2V0S2V5KGNvbGxlY3Rpb24pO1xuICAgIGNvbnN0IGxvY2FsU3RhdGUgPSBzdGF0ZSBhcyBSZWNvcmQ8c3RyaW5nLCBTaWduYWw8QXJyYXk8RW50aXR5Pj4+O1xuICAgIGNvbnN0IGhhc0VudGl0aWVzID0gbG9jYWxTdGF0ZVtrZXldKCk/Lmxlbmd0aCA+IDA7XG4gICAgY29uc3QgdXBkYXRlID0gaGFzRW50aXRpZXMgPyBzZXRBbGxFbnRpdGllcyA6IGFkZEVudGl0aWVzO1xuXG4gICAgaWYgKGtleSA9PT0gJ2VudGl0aWVzJykge1xuICAgICAgcGF0Y2hTdGF0ZShzdGF0ZSBhcyBTdGF0ZVNpZ25hbDxvYmplY3Q+LCB1cGRhdGUocmVzLmNvbnRlbnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0Y2hTdGF0ZShcbiAgICAgICAgc3RhdGUgYXMgU3RhdGVTaWduYWw8b2JqZWN0PixcbiAgICAgICAgdXBkYXRlKHJlcy5jb250ZW50LCB7IGNvbGxlY3Rpb24gfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9hZGVyPFQ+KFxuICBMb2FkZXI6IExvYWRTZXJ2aWNlPExvYWRlcjxULCBFbnRpdHksIHN0cmluZz4+LFxuICBtZXRob2ROYW1lOiBzdHJpbmdcbik6ICguLi5hcmdzOiBUW10pID0+IE9ic2VydmFibGU8RW50aXR5UmVzdWx0PEVudGl0eT4+IHtcbiAgcmV0dXJuIHJ1bkluSW5qZWN0aW9uQ29udGV4dChpbmplY3QoSW5qZWN0b3IpLCAoKSA9PiB7XG4gICAgY29uc3QgbG9hZGVyID0gaW5qZWN0KExvYWRlcik7XG4gICAgcmV0dXJuIChxdWVyeTogVCkgPT4gbG9hZGVyW21ldGhvZE5hbWVdKHF1ZXJ5KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRW50aXRpZXM8VD4oXG4gIGxvYWRlcjogKHF1ZXJ5OiBUKSA9PiBPYnNlcnZhYmxlPEVudGl0eVJlc3VsdDxFbnRpdHk+PixcbiAgc3RhdGU6IFN0YXRlU2lnbmFsPG9iamVjdD4sXG4gIGNvbGxlY3Rpb24gPSAnZW50aXRpZXMnXG4pIHtcbiAgcmV0dXJuIHJ4TWV0aG9kPFQ+KFxuICAgIHBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHF1ZXJ5KSA9PlxuICAgICAgICBsb2FkZXIocXVlcnkpLnBpcGUoXG4gICAgICAgICAgdGFwUmVzcG9uc2Uoe1xuICAgICAgICAgICAgbmV4dDogaGFuZGxlTG9hZEVudGl0aWVzU3VjY2VzcyhzdGF0ZSwgY29sbGVjdGlvbiksXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4gRU1QVFksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNsaWNlTG9hZGVyPFQ+KFxuICBMb2FkZXI6IExvYWRTZXJ2aWNlPExvYWRlcjxULCBFbnRpdHksIHN0cmluZz4+LFxuICBtZXRob2ROYW1lOiBzdHJpbmdcbik6IChhcmdzOiBUKSA9PiBPYnNlcnZhYmxlPEVudGl0eVJlc3VsdDxFbnRpdHk+PiB7XG4gIHJldHVybiBydW5JbkluamVjdGlvbkNvbnRleHQoaW5qZWN0KEluamVjdG9yKSwgKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRlciA9IGluamVjdChMb2FkZXIpO1xuICAgIHJldHVybiAocXVlcnk6IFQpID0+IGxvYWRlclttZXRob2ROYW1lXShxdWVyeSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNsaWNlPFQ+KFxuICBsb2FkZXI6IChxdWVyeTogVCkgPT4gT2JzZXJ2YWJsZTxFbnRpdHlSZXN1bHQ8RW50aXR5Pj4sXG4gIHN0YXRlOiBTdGF0ZVNpZ25hbDxvYmplY3Q+LFxuICBzbGljZTogc3RyaW5nLFxuKSB7XG4gIHJldHVybiByeE1ldGhvZDxUPihcbiAgICBwaXBlKFxuICAgICAgc3dpdGNoTWFwKChxdWVyeSkgPT5cbiAgICAgICAgbG9hZGVyKHF1ZXJ5KS5waXBlKFxuICAgICAgICAgIHRhcFJlc3BvbnNlKHtcbiAgICAgICAgICAgIG5leHQ6IChyZXMpID0+IHBhdGNoU3RhdGUoc3RhdGUsIHsgW3NsaWNlXTogcmVzLmNvbnRlbnQgfSksXG4gICAgICAgICAgICBlcnJvcjogKCkgPT4gRU1QVFksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==