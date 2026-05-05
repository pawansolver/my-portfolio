// ─── Dashboard Dummy Data ─────────────────────────────────────────────────────
// All shapes are typed so components can easily swap to real API data later.

// ── KPI Cards ────────────────────────────────────────────────────────────────
export interface KPICardData {
    id: string;
    title: string;
    value: string;
    rawValue: number;
    icon: string; // lucide icon name — resolved in KPICard component
    trend: number; // positive = up, negative = down
    trendLabel: string;
    color: string; // tailwind gradient class
}

export const kpiCards: KPICardData[] = [
    {
        id: "total-projects",
        title: "Total Projects",
        value: "128",
        rawValue: 128,
        icon: "Briefcase",
        trend: 12.5,
        trendLabel: "vs last month",
        color: "from-violet-500 to-purple-600",
    },
    {
        id: "active-clients",
        title: "Active Clients",
        value: "84",
        rawValue: 84,
        icon: "Users",
        trend: 8.2,
        trendLabel: "vs last month",
        color: "from-cyan-500 to-blue-600",
    },
    {
        id: "completed-tasks",
        title: "Completed Tasks",
        value: "1,247",
        rawValue: 1247,
        icon: "CheckCircle2",
        trend: 22.4,
        trendLabel: "vs last month",
        color: "from-emerald-500 to-teal-600",
    },
    {
        id: "revenue",
        title: "Total Revenue",
        value: "$3.4M",
        rawValue: 3400000,
        icon: "DollarSign",
        trend: 15.9,
        trendLabel: "vs last month",
        color: "from-amber-500 to-orange-500",
    },
    {
        id: "pending-invoices",
        title: "Pending Invoices",
        value: "23",
        rawValue: 23,
        icon: "FileText",
        trend: -4.1,
        trendLabel: "vs last month",
        color: "from-rose-500 to-pink-600",
    },
];

// ── Revenue Chart (monthly) ──────────────────────────────────────────────────
export interface RevenuePoint {
    month: string;
    revenue: number;
}

export const revenueData: RevenuePoint[] = [
    { month: "Mar", revenue: 210000 },
    { month: "Apr", revenue: 245000 },
    { month: "May", revenue: 228000 },
    { month: "Jun", revenue: 310000 },
    { month: "Jul", revenue: 295000 },
    { month: "Aug", revenue: 340000 },
    { month: "Sep", revenue: 375000 },
    { month: "Oct", revenue: 360000 },
    { month: "Nov", revenue: 410000 },
    { month: "Dec", revenue: 398000 },
    { month: "Jan", revenue: 440000 },
    { month: "Feb", revenue: 468000 },
];

// ── Project Status (pie) ─────────────────────────────────────────────────────
export interface ProjectStatusSegment {
    label: string;
    value: number;
    color: string;
}

export const projectStatusData: ProjectStatusSegment[] = [
    { label: "Completed", value: 54, color: "#10b981" },
    { label: "In Progress", value: 31, color: "#6366f1" },
    { label: "On Hold", value: 9, color: "#f59e0b" },
    { label: "Cancelled", value: 6, color: "#ef4444" },
];

// ── Team Performance (bar) ────────────────────────────────────────────────────
export interface TeamPerformanceBar {
    name: string;
    completed: number;
    inProgress: number;
}

export const teamPerformanceData: TeamPerformanceBar[] = [
    { name: "Arjun", completed: 42, inProgress: 8 },
    { name: "Priya", completed: 38, inProgress: 12 },
    { name: "Ravi", completed: 29, inProgress: 6 },
    { name: "Sneha", completed: 51, inProgress: 3 },
    { name: "Dev", completed: 35, inProgress: 9 },
    { name: "Kiran", completed: 27, inProgress: 14 },
];

// ── Recent Projects (table) ──────────────────────────────────────────────────
export type ProjectStatus = "Completed" | "In Progress" | "On Hold" | "Cancelled";

export interface RecentProject {
    id: string;
    name: string;
    client: string;
    status: ProjectStatus;
    deadline: string;
    budget: string;
    progress: number; // 0-100
}

export const recentProjects: RecentProject[] = [
    {
        id: "P-001",
        name: "AI Analytics Platform",
        client: "TechCorp Global",
        status: "In Progress",
        deadline: "2026-03-15",
        budget: "$120,000",
        progress: 68,
    },
    {
        id: "P-002",
        name: "Cloud Migration Suite",
        client: "FinEdge India",
        status: "Completed",
        deadline: "2026-02-10",
        budget: "$85,000",
        progress: 100,
    },
    {
        id: "P-003",
        name: "Zero-Trust Security Audit",
        client: "SecureBank Ltd.",
        status: "In Progress",
        deadline: "2026-04-01",
        budget: "$64,000",
        progress: 41,
    },
    {
        id: "P-004",
        name: "Fintech Mobile App",
        client: "PaySmart Pvt.",
        status: "On Hold",
        deadline: "2026-05-20",
        budget: "$98,000",
        progress: 22,
    },
    {
        id: "P-005",
        name: "ERP Integration Module",
        client: "Nexus Retail",
        status: "Completed",
        deadline: "2026-01-28",
        budget: "$55,000",
        progress: 100,
    },
    {
        id: "P-006",
        name: "Data Warehouse Setup",
        client: "LogiTrack Inc.",
        status: "In Progress",
        deadline: "2026-03-30",
        budget: "$78,000",
        progress: 59,
    },
];

// ── Pending Tasks (table) ────────────────────────────────────────────────────
export type TaskPriority = "High" | "Medium" | "Low";

export interface PendingTask {
    id: string;
    title: string;
    project: string;
    assignee: string;
    assigneeInitials: string;
    priority: TaskPriority;
    dueDate: string; // ISO date
    status: "Pending" | "In Review";
}

export const pendingTasks: PendingTask[] = [
    {
        id: "T-101",
        title: "Design system audit & update",
        project: "AI Analytics Platform",
        assignee: "Priya Sharma",
        assigneeInitials: "PS",
        priority: "High",
        dueDate: "2026-02-28",
        status: "In Review",
    },
    {
        id: "T-102",
        title: "API gateway performance tuning",
        project: "Cloud Migration Suite",
        assignee: "Arjun Mehta",
        assigneeInitials: "AM",
        priority: "High",
        dueDate: "2026-03-02",
        status: "Pending",
    },
    {
        id: "T-103",
        title: "Penetration test report",
        project: "Zero-Trust Security Audit",
        assignee: "Sneha Patel",
        assigneeInitials: "SP",
        priority: "Medium",
        dueDate: "2026-03-10",
        status: "Pending",
    },
    {
        id: "T-104",
        title: "Mobile push notification setup",
        project: "Fintech Mobile App",
        assignee: "Ravi Kumar",
        assigneeInitials: "RK",
        priority: "Medium",
        dueDate: "2026-03-18",
        status: "In Review",
    },
    {
        id: "T-105",
        title: "Monthly invoice generation",
        project: "ERP Integration Module",
        assignee: "Dev Singh",
        assigneeInitials: "DS",
        priority: "Low",
        dueDate: "2026-03-05",
        status: "Pending",
    },
];

// ── Team Members ─────────────────────────────────────────────────────────────
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    initials: string;
    online: boolean;
    project: string;
    gradientFrom: string;
    gradientTo: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: "u1",
        name: "Arjun Mehta",
        role: "Lead Engineer",
        initials: "AM",
        online: true,
        project: "AI Analytics Platform",
        gradientFrom: "#6366f1",
        gradientTo: "#8b5cf6",
    },
    {
        id: "u2",
        name: "Priya Sharma",
        role: "UI/UX Designer",
        initials: "PS",
        online: true,
        project: "Fintech Mobile App",
        gradientFrom: "#06b6d4",
        gradientTo: "#3b82f6",
    },
    {
        id: "u3",
        name: "Ravi Kumar",
        role: "Backend Dev",
        initials: "RK",
        online: false,
        project: "Cloud Migration Suite",
        gradientFrom: "#10b981",
        gradientTo: "#14b8a6",
    },
    {
        id: "u4",
        name: "Sneha Patel",
        role: "Security Analyst",
        initials: "SP",
        online: true,
        project: "Zero-Trust Security Audit",
        gradientFrom: "#f59e0b",
        gradientTo: "#ef4444",
    },
    {
        id: "u5",
        name: "Dev Singh",
        role: "DevOps Engineer",
        initials: "DS",
        online: false,
        project: "ERP Integration Module",
        gradientFrom: "#ec4899",
        gradientTo: "#8b5cf6",
    },
    {
        id: "u6",
        name: "Kiran Nair",
        role: "Data Scientist",
        initials: "KN",
        online: true,
        project: "Data Warehouse Setup",
        gradientFrom: "#f97316",
        gradientTo: "#eab308",
    },
];

// ── Upcoming Deadlines ────────────────────────────────────────────────────────
export interface Deadline {
    id: string;
    title: string;
    project: string;
    date: string; // ISO date
    urgency: "critical" | "warning" | "normal";
}

export const upcomingDeadlines: Deadline[] = [
    {
        id: "d1",
        title: "Design system audit & update",
        project: "AI Analytics Platform",
        date: "2026-02-28",
        urgency: "critical",
    },
    {
        id: "d2",
        title: "API gateway performance tuning",
        project: "Cloud Migration Suite",
        date: "2026-03-02",
        urgency: "critical",
    },
    {
        id: "d3",
        title: "Monthly invoice generation",
        project: "ERP Integration Module",
        date: "2026-03-05",
        urgency: "warning",
    },
    {
        id: "d4",
        title: "Penetration test report",
        project: "Zero-Trust Security Audit",
        date: "2026-03-10",
        urgency: "warning",
    },
    {
        id: "d5",
        title: "Mobile push notification setup",
        project: "Fintech Mobile App",
        date: "2026-03-18",
        urgency: "normal",
    },
];

// ── Notifications ─────────────────────────────────────────────────────────────
export interface Notification {
    id: string;
    message: string;
    time: string;
    read: boolean;
    type: "info" | "success" | "warning" | "error";
}

export const notifications: Notification[] = [
    {
        id: "n1",
        message: "New project assigned: Data Warehouse Setup",
        time: "5 min ago",
        read: false,
        type: "info",
    },
    {
        id: "n2",
        message: "Invoice #INV-2024 approved by FinEdge India",
        time: "1 hour ago",
        read: false,
        type: "success",
    },
    {
        id: "n3",
        message: "Task overdue: Design system audit",
        time: "3 hours ago",
        read: false,
        type: "warning",
    },
    {
        id: "n4",
        message: "Security alert on Zero-Trust project",
        time: "Yesterday",
        read: true,
        type: "error",
    },
    {
        id: "n5",
        message: "Team meeting scheduled for Monday 10:00 AM",
        time: "Yesterday",
        read: true,
        type: "info",
    },
];
