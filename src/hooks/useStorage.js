import { useState, useEffect } from "react";

import { projectStorage } from '../base';

export const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        if (file) {
            const storageRef = projectStorage.ref(file.name);

            storageRef.put(file).on(
                "state_changed",
                (snap) => {
                    let percentage =
                        Math.round(
                        (snap.bytesTransferred / snap.totalBytes) * 100
                    );
                    setProgress(percentage);
                },
                (err) => {
                    setError(err);
                },
                async () => {
                    const downloadUrl = await storageRef.getDownloadURL();
                    setUrl(downloadUrl);
                }
            );
        }
    }, [file]);

    return { progress, url, error };
};