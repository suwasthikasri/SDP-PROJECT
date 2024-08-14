package com.example.demo;



import com.example.demo.AccountService;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping("/signin")
    public boolean signIn(@RequestBody SignInRequest signInRequest) {
        return accountService.authenticate(signInRequest.getEmail(), signInRequest.getPassword());
    }

    // Request class for SignIn
    public static class SignInRequest {
        private String email;
        private String password;

        // Getters and Setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
