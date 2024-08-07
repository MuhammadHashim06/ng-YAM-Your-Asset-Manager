export const constant = {
    apiEndPoint: {
        register: 'http://localhost:5235/SignUp',
        confirmemail: 'http://localhost:5235/ConfirmEmail',
        login:'http://localhost:5235/SignIn',
        emailverifyforgetpassword:'http://localhost:5235/ForgetPassword',
        setresetpassword:'http://localhost:5235/ResetPassword' 
    },
    login: {
        success: {
            code: 200,
            message: 'Login Success',
        }, fail: {
            code: 400,
            message: 'Login Fail',
        }
    },

    // Registration Message
    register: {
        success: {
            //Account Successfully Added
            accountsuccess: 'Account created successfully and a Confirmation email sent. please verify your email',
            // Confirmation Email
            verificationmessage: 'Verification Email sent',
            // Registeration Successfull after Verfication
            registeration: 'Registration Successfull',
            // Email Verification message on Successfull Registration
            emailverification: 'Your Email Address is Successfully Verified! PLease login to access your account!'
        },
        fail: {
            // Registeration failed Verfication
            registeration: 'Registration Fail',
            // Email Verification message on failed Registration
            emailverification: 'Your Email Address is not Confirmed!'
        }
    },

    inputerrormessage: {
        required: 'Please fill Field',
        email: 'Please Enter Valid Email',
        password: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
        passwordmatch:'Password didnot math'   
    },
    CRUDmessages:{
        created:{
            message:'Succesfully Created',
            theme:'green'
        },
        updated:{
            message:'Succesfully Updated',
            theme:'green'
        },
        deleted:{
            message:'Succesfully Deleted',
            theme:'green'
        },        
    }
}

export const response = {
    code: 404,
    message: 'Page Not Found',
}