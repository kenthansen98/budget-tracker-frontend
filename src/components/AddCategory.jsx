import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import Button from './Button';
import useAddCategory from '../hooks/useAddCategory';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.colors.itemBackground,
        padding: 15,
    },
    field: {
        borderWidth: 1,
        borderColor: theme.colors.background,
        borderRadius: 5,
        width: 350,
        padding: 15,
        marginBottom: 10,
    },
    selector: {
        borderWidth: 1,
        borderColor: theme.colors.background,
        borderRadius: 5,
        width: 350,
        padding: 15,
        marginBottom: 10,
    }
});

const initialValues = {
    name: '',
    amount: '',
    type: '',
};

const AddCategoryForm = ({ onSubmit, setFieldValue }) => {
    const [choice, setChoice] = useState();

    return (
        <View style={styles.container}>
            <FormikTextInput name="name" placeholder="Category name" style={styles.field} />
            <FormikTextInput name="amount" placeholder="Amount in budget" style={styles.field} />
            <RNPickerSelect
                onValueChange={(value) => {
                    setChoice(value);
                    setFieldValue('type', value);}}
                items={[
                    {label: 'Expense', value: 'Expense'},
                    {label: 'Income', value: 'Income'},
                ]}
                >
                {/* <TextInput value={choice} style={styles.field} /> */}
                <FormikTextInput name="type" placeholder={choice} style={styles.field} value={choice} />
                {/* <Text style={styles.field}>{choice}</Text> */}
            </RNPickerSelect>
            <Button text="Add Category" onSubmit={onSubmit} />
        </View>
    );
};

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Category name is required'),
    amount: yup
        .number('Amount must be a number')
        .min(0, 'Budget amount must be greater than 0')
        .required('Budget amount is required'),
    type: yup
        .string()
        .required('Type is required'),
});

const AddCategory = () => {
    const [addCategory] = useAddCategory();
    const history = useHistory();

    const onSubmit = async (values) => {
        console.log(values);
        const { name, amount, type } = values;
        try {
            const data = await addCategory({name, amount, type});
            console.log(data);
            history.push('/mybudget');
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, setFieldValue }) => <AddCategoryForm onSubmit={handleSubmit} setFieldValue={setFieldValue}/>}
        </Formik>
    );
};

export default AddCategory;