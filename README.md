# Bank Query Middleware

To avoid CORS issues this api can be called which intern calls https://ecas.bkhicd.com/api/customer/api/BankDetails/Malaysia and returns a list of banks.

The api will returns:

{
    "bankNames": [
        "AEON BANK (M) BERHAD",
        "BANK PETANIAN MALAYSIA BERHAD (AGROBANK)",
        "AMBANK (M) BERHAD",
        "BANK ISLAM MALAYSIA BERHAD",
        "BANK OF CHINA (MALAYSIA) BERHAD",
        "BANGKOK BANK BERHAD",
        "BANK KERJASAMA RAKYAT MALAYSIA BERHAD",
        "BANK MUAMALAT",
        "BNP PARIBAS MALAYSIA",
        "BANK OF AMERICA MALAYSIA",
        "BOOST BANK BERHAD",
        "MUFG BANK (MALAYSIA) BHD",
        "BIGPAY MALAYSIA SDN BHD",
        "BANK SIMPANAN NASIONAL BERHAD",
        "J.P. MORGAN CHASE BANK BERHAD",
        "CIMB BANK (L) LIMITED",
        "CITIBANK BERHAD",
        "DEUTSCHE BANK (MALAYSIA) BERHAD",
        "GXBANK",
        "HSBC BANK MALAYSIA BERHAD",
        "HONG LEONG FINANCE BERHAD",
        "INDUSTRIAL & COMMERCIAL BANK OF CHINA",
        "KUWAIT FINANCE HOUSE (MALAYSIA) BHD",
        "MALAYAN BANKING BERHAD (MAYBANK)",
        "MBSB BANK",
        "ALLIANCE BANK MALAYSIA BERHAD",
        "MIZUHO BANK (MALAYSIA) BERHAD",
        "OCBC BANK (MALAYSIA) BHD",
        "PUBLIC BANK (L) LTD",
        "CHINA CONSTRUCTION BANK (MALAYSIA) BERHAD",
        "AFFIN BANK BERHAD / AFFIN ISLAMIC BANK",
        "RHB BANK (L) LTD",
        "AL-RAJHI BANKING & INVESTMENT CORP (M) SDN BHD",
        "STANDARD CHARTERED BANK MALAYSIA",
        "SUMITOMO MITSUI BANKING CORPORATION MALAYSIA BHD",
        "UNITED OVERSEAS BANK (MALAYSIA) BERHAD"
    ]
}

# Note
Example extension is hosted on Render.com and can take up to a minute the first time it is accessed.  Thsi API is for testing purposes only.
please host the API on production infrustructure for more responsive use.
