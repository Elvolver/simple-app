import {Field, reduxForm} from "redux-form";
import {alphaNumeric, maxLength, required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {clearPostFormAction, postLoadAction} from "../store/reduxPostFormReduser";

const maxLength10 = maxLength(10)



const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)
const data = {
    // used to populate "account" reducer when "Load" is clicked
    title: 'Jane',
    description: 'Doe',

};
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

let InitializeFromStateForm = props => {
    const { handleSubmit, load, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button type="button" onClick={() => load(data)}>Load Account</button>
            </div>
            <div>
                <label>Title</label>
                <div>
                    <Field
                        name="title"
                        component="input"
                        type="text"
                        placeholder="Title"
                    />
                </div>
            </div>
            <div>
                <label>Description</label>
                <div>
                    <Field
                        name="description"
                        component="input"
                        type="text"
                        placeholder="Description"
                    />
                </div>
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Undo Changes
                </button>
            </div>
        </form>
    );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
    form: 'initializeFromState', // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
    state => ({
        initialValues: state.account.data, // pull initial values from account reducer
    }),
    { load: postLoadAction, clear: clearPostFormAction }, // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm