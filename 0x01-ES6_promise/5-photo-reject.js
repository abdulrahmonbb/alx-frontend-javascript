export default function uploadPhoto(string) {
    return Promise.reject(
        Error(`${string} cannot be processed`)
        );
}
