@echo off
title Hospital NestJS Resource Generator
color 0A

echo ============================================
echo   HOSPITAL MANAGEMENT SYSTEM GENERATOR
echo ============================================
echo.


where nest >nul 2>&1
if errorlevel 1 (
    echo [ERROR] NestJS CLI not found!
    echo Please install it first: npm install -g @nestjs/cli
    echo.
    pause
    exit /b 1
)

echo [INFO] Generating 78 modules...
echo.
echo NOTE: For each module, select the transport layer when prompted
echo (REST API, GraphQL, etc.)
echo.

:: =========================
:: CORE CLINICAL (10)
:: =========================
echo [1/8] Creating Core Clinical modules...
call nest g resource patients --no-spec
call nest g resource doctors --no-spec
call nest g resource nurses --no-spec
call nest g resource staff --no-spec
call nest g resource departments --no-spec
call nest g resource specialties --no-spec
call nest g resource appointments --no-spec
call nest g resource shifts --no-spec
call nest g resource surgery --no-spec
call nest g resource ambulance --no-spec

:: =========================
:: EMERGENCY & CRITICAL CARE (10)
:: =========================
echo [2/8] Creating Emergency & Critical Care modules...
call nest g resource triage --no-spec
call nest g resource emergency --no-spec
call nest g resource icu --no-spec
call nest g resource admissions --no-spec
call nest g resource wards --no-spec
call nest g resource critical-care --no-spec
call nest g resource trauma --no-spec
call nest g resource resuscitation --no-spec
call nest g resource code-blue --no-spec
call nest g resource rapid-response --no-spec

:: =========================
:: CLINICAL RECORDS (15)
:: =========================
echo [3/8] Creating Clinical Records modules...
call nest g resource medical-records --no-spec
call nest g resource vitals --no-spec
call nest g resource prescriptions --no-spec
call nest g resource lab-tests --no-spec
call nest g resource radiology --no-spec
call nest g resource diagnosis --no-spec
call nest g resource allergies --no-spec
call nest g resource immunizations --no-spec
call nest g resource medications --no-spec
call nest g resource clinical-notes --no-spec
call nest g resource care-plans --no-spec
call nest g resource progress-notes --no-spec
call nest g resource nursing-notes --no-spec
call nest g resource intake-output --no-spec
call nest g resource pain-assessment --no-spec

:: =========================
:: PHARMACY & INVENTORY (10)
:: =========================
echo [4/8] Creating Pharmacy & Inventory modules...
call nest g resource pharmacy --no-spec
call nest g resource inventory --no-spec
call nest g resource blood-bank --no-spec
call nest g resource vaccines --no-spec
call nest g resource medical-equipment --no-spec
call nest g resource supplies --no-spec
call nest g resource purchase-orders --no-spec
call nest g resource vendors --no-spec
call nest g resource stock-alerts --no-spec
call nest g resource drug-interactions --no-spec

:: =========================
:: FINANCE (10)
:: =========================
echo [5/8] Creating Finance modules...
call nest g resource billing --no-spec
call nest g resource insurance --no-spec
call nest g resource pricing --no-spec
call nest g resource accounting --no-spec
call nest g resource payments --no-spec
call nest g resource refunds --no-spec
call nest g resource discounts --no-spec
call nest g resource financial-reports --no-spec
call nest g resource budgets --no-spec
call nest g resource expenses --no-spec

:: =========================
:: REPORTING & ANALYTICS (8)
:: =========================
echo [6/8] Creating Reporting & Analytics modules...
call nest g resource reports --no-spec
call nest g resource dashboards --no-spec
call nest g resource audit-logs --no-spec
call nest g resource compliance --no-spec
call nest g resource quality-metrics --no-spec
call nest g resource patient-satisfaction --no-spec
call nest g resource kpi --no-spec
call nest g resource analytics --no-spec

:: =========================
:: USERS & SECURITY (10)
:: =========================
echo [7/8] Creating Users & Security modules...
call nest g resource users --no-spec
call nest g resource roles --no-spec
call nest g resource permissions --no-spec
call nest g resource auth --no-spec
call nest g resource sessions --no-spec
call nest g resource two-factor-auth --no-spec
call nest g resource api-keys --no-spec
call nest g resource rate-limiting --no-spec
call nest g resource whitelist --no-spec
call nest g resource audit --no-spec

:: =========================
:: ADDITIONAL SYSTEM MODULES (5)
:: =========================
echo [8/8] Creating Additional System modules...
call nest g resource notifications --no-spec
call nest g resource messaging --no-spec
call nest g resource telemedicine --no-spec
call nest g resource feedback --no-spec
call nest g resource audit-trail --no-spec

echo.
echo ============================================
echo   SUCCESS! 78 MODULES GENERATED
echo ============================================
echo.
echo Generated modules:
echo - Core Clinical: 10 modules
echo - Emergency Care: 10 modules  
echo - Clinical Records: 15 modules
echo - Pharmacy/Inventory: 10 modules
echo - Finance: 10 modules
echo - Reporting: 8 modules
echo - Users/Security: 10 modules
echo - Additional: 5 modules
echo.
echo TOTAL: 78 modules
echo.
pause