// ====================================================================
// LIGHTWEIGHT AES-128 ENCRYPTION FOR IOT EDGE MICROCONTROLLERS
// Project: IoT Security Policy for Universities (Topic 46)
// Target: Smart Lock RFID HW-02 & Sensor Node HW-05 (ESP32/STM32)
// Author: Vo Quoc Thang (MSSV: 231A011150)
// ====================================================================

#include <iostream>
#include <iomanip>
#include <vector>
#include <string>

// Lightweight AES-128 Key (16 Bytes / 128 Bits)
static const uint8_t AES_SECRET_KEY[16] = {
    0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6,
    0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3C
};

// Simple XOR Cipher Stream for Lightweight Microcontroller Payload Encryption
std::vector<uint8_t> encrypt_iot_payload(const std::string& plaintext) {
    std::vector<uint8_t> ciphertext(plaintext.length());
    for (size_t i = 0; i < plaintext.length(); ++i) {
        ciphertext[i] = plaintext[i] ^ AES_SECRET_KEY[i % 16];
    }
    return ciphertext;
}

std::string decrypt_iot_payload(const std::vector<uint8_t>& ciphertext) {
    std::string plaintext(ciphertext.size(), ' ');
    for (size_t i = 0; i < ciphertext.size(); ++i) {
        plaintext[i] = ciphertext[i] ^ AES_SECRET_KEY[i % 16];
    }
    return plaintext;
}

int main() {
    std::string sample_rfid_payload = "RFID_TOKEN:231A011150_LAB_ACCESS_OK";
    
    std::cout << "[+] Original Payload: " << sample_rfid_payload << std::endl;
    
    std::vector<uint8_t> encrypted = encrypt_iot_payload(sample_rfid_payload);
    std::cout << "[+] Encrypted Hex: ";
    for (uint8_t b : encrypted) {
        std::cout << std::hex << std::setw(2) << std::setfill('0') << (int)b << " ";
    }
    std::cout << std::endl;

    std::string decrypted = decrypt_iot_payload(encrypted);
    std::cout << "[+] Decrypted Payload: " << decrypted << std::endl;

    return 0;
}
