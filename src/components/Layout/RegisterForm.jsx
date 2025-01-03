import * as Components from '../../components';

const RegisterForm=()=>{
    return(
            <div className="flex justify-center">
                <div className="flex flex-col self-center rounded-lg shadow-lg py-4 px-4 gap-3">
                    <span className="text-center text-lg font-bold">Register Form</span>
                    <form id="register" action="post">
                    <Components.TextInput label="Username" id="username" placeholder="Type your username" type="text" required />
                    <Components.TextInput label="Password" id="password" placeholder="Type your password" type="password" required />
                    <Components.TextInput label="First Name" id="firstName" placeholder="Type your first name" type="text" required />
                    <Components.TextInput label="Last Name" id="lastName" placeholder="Type your last name" type="text"/>
                    <Components.TextInput label="Phone Number" id="phoneNumber" placeholder="Type your phone number" type="number" pattern="^\+?[1-9]\d{1,14}$"/>
                    <Components.TextInput label="Address" id="address" placeholder="Type your address" type="textarea" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 self-center text-gray-800 py-2 px-3 rounded-lg mt-3">Submit</button>
                    </form>
                </div>
                <div>
                    <img src="" />
                </div>
            </div>
    )
}

export default RegisterForm;