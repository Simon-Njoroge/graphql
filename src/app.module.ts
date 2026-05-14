import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ConfigModule} from '@nestjs/config';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {DatabaseModule} from "./config/db.config";
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';
import { NursesModule } from './nurses/nurses.module';
import { StaffModule } from './staff/staff.module';
import { DepartmentsModule } from './departments/departments.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ShiftsModule } from './shifts/shifts.module';
import { SurgeryModule } from './surgery/surgery.module';
import { AmbulanceModule } from './ambulance/ambulance.module';
import { TriageModule } from './triage/triage.module';
import { EmergencyModule } from './emergency/emergency.module';
import { IcuModule } from './icu/icu.module';
import { AdmissionsModule } from './admissions/admissions.module';
import { WardsModule } from './wards/wards.module';
import { CriticalCareModule } from './critical-care/critical-care.module';
import { TraumaModule } from './trauma/trauma.module';
import { ResuscitationModule } from './resuscitation/resuscitation.module';
import { CodeBlueModule } from './code-blue/code-blue.module';
import { RapidResponseModule } from './rapid-response/rapid-response.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { VitalsModule } from './vitals/vitals.module';
import { PrescriptionsModule } from './prescriptions/prescriptions.module';
import { LabTestsModule } from './lab-tests/lab-tests.module';
import { RadiologyModule } from './radiology/radiology.module';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
import { AllergiesModule } from './allergies/allergies.module';
import { ImmunizationsModule } from './immunizations/immunizations.module';
import { MedicationsModule } from './medications/medications.module';
import { ClinicalNotesModule } from './clinical-notes/clinical-notes.module';
import { CarePlansModule } from './care-plans/care-plans.module';
import { ProgressNotesModule } from './progress-notes/progress-notes.module';
import { NursingNotesModule } from './nursing-notes/nursing-notes.module';
import { IntakeOutputModule } from './intake-output/intake-output.module';
import { PainAssessmentModule } from './pain-assessment/pain-assessment.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { InventoryModule } from './inventory/inventory.module';
import { BloodBankModule } from './blood-bank/blood-bank.module';
import { VaccinesModule } from './vaccines/vaccines.module';
import { MedicalEquipmentModule } from './medical-equipment/medical-equipment.module';
import { SuppliesModule } from './supplies/supplies.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { VendorsModule } from './vendors/vendors.module';
import { StockAlertsModule } from './stock-alerts/stock-alerts.module';
import { DrugInteractionsModule } from './drug-interactions/drug-interactions.module';
import { BillingModule } from './billing/billing.module';
import { InsuranceModule } from './insurance/insurance.module';
import { PricingModule } from './pricing/pricing.module';
import { AccountingModule } from './accounting/accounting.module';
import { PaymentsModule } from './payments/payments.module';
import { RefundsModule } from './refunds/refunds.module';
import { DiscountsModule } from './discounts/discounts.module';
import { FinancialReportsModule } from './financial-reports/financial-reports.module';
import { BudgetsModule } from './budgets/budgets.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ReportsModule } from './reports/reports.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { ComplianceModule } from './compliance/compliance.module';
import { QualityMetricsModule } from './quality-metrics/quality-metrics.module';
import { PatientSatisfactionModule } from './patient-satisfaction/patient-satisfaction.module';
import { KpiModule } from './kpi/kpi.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from './sessions/sessions.module';
import { TwoFactorAuthModule } from './two-factor-auth/two-factor-auth.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { RateLimitingModule } from './rate-limiting/rate-limiting.module';
import { WhitelistModule } from './whitelist/whitelist.module';
import { AuditModule } from './audit/audit.module';
import { NotificationsModule } from './notifications/notifications.module';
import { MessagingModule } from './messaging/messaging.module';
import { TelemedicineModule } from './telemedicine/telemedicine.module';
import { FeedbackModule } from './feedback/feedback.module';
import { AuditTrailModule } from './audit-trail/audit-trail.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    DatabaseModule,
    PatientsModule,
    DoctorsModule,
    NursesModule,
    StaffModule,
    DepartmentsModule,
    SpecialtiesModule,
    AppointmentsModule,
    ShiftsModule,
    SurgeryModule,
    AmbulanceModule,
    TriageModule,
    EmergencyModule,
    IcuModule,
    AdmissionsModule,
    WardsModule,
    CriticalCareModule,
    TraumaModule,
    ResuscitationModule,
    CodeBlueModule,
    RapidResponseModule,
    MedicalRecordsModule,
    VitalsModule,
    PrescriptionsModule,
    LabTestsModule,
    RadiologyModule,
    DiagnosisModule,
    AllergiesModule,
    ImmunizationsModule,
    MedicationsModule,
    ClinicalNotesModule,
    CarePlansModule,
    ProgressNotesModule,
    NursingNotesModule,
    IntakeOutputModule,
    PainAssessmentModule,
    PharmacyModule,
    InventoryModule,
    BloodBankModule,
    VaccinesModule,
    MedicalEquipmentModule,
    SuppliesModule,
    PurchaseOrdersModule,
    VendorsModule,
    StockAlertsModule,
    DrugInteractionsModule,
    BillingModule,
    InsuranceModule,
    PricingModule,
    AccountingModule,
    PaymentsModule,
    RefundsModule,
    DiscountsModule,
    FinancialReportsModule,
    BudgetsModule,
    ExpensesModule,
    ReportsModule,
    DashboardsModule,
    AuditLogsModule,
    ComplianceModule,
    QualityMetricsModule,
    PatientSatisfactionModule,
    KpiModule,
    AnalyticsModule,
    RolesModule,
    PermissionsModule,
    AuthModule,
    SessionsModule,
    TwoFactorAuthModule,
    ApiKeysModule,
    RateLimitingModule,
    WhitelistModule,
    AuditModule,
    NotificationsModule,
    MessagingModule,
    TelemedicineModule,
    FeedbackModule,
    AuditTrailModule, 
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
