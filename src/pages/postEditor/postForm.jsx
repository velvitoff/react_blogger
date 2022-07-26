import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';

import useLocalize from '../../hooks/useLocalize';
import Localize from '../../components/common/localize';
import './postEditor.css';
import SubmitButton from './submitButton';

export default function PostForm({ isEdit, publishCallback, initialData }) {

    const titleLabel = useLocalize("Article title");
    const [errorBarOpen, setErrorBarOpen] = useState(false);

    const { handleSubmit, control } = useForm({
        defaultValues: {
            title: initialData.title,
            content: initialData.content
        }
    });

    const onSubmit = data => {
        if (data.title === "") {
            setErrorBarOpen(true);
            window.setTimeout(() => setErrorBarOpen(false), 2000);
            return;
        }

        publishCallback(data);
    }


    return (
        <>
            <Box id="post-editor-wrap" sx={{ backgroundColor: "primary.articleBackground" }}>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                    <Controller
                        sx={{ flexGrow: 1 }}
                        name="title"
                        control={control}
                        render={({ field }) =>
                            <TextField {...field} label={titleLabel} variant="standard" sx={{width: '75%'}} />}
                    />
                    <SubmitButton isEdit={isEdit} onClick={handleSubmit(onSubmit)} />
                </Stack>
                <Box id="post-editor">
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) =>
                            <ReactQuill {...field} theme="snow" />}
                    />
                </Box>
                <SubmitButton isEdit={isEdit} onClick={handleSubmit(onSubmit)} />
            </Box >

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={errorBarOpen}
                message="I love snacks"
            >
                <Alert severity="error">
                    <Localize input="Invalid input" />
                </Alert>
            </Snackbar>
        </>
    );
}