package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public boolean authenticate(String email, String password) {
        Account account = accountRepository.findByEmail(email);
        return account != null && account.getPassword().equals(password);
    }
}
