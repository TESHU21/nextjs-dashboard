import React from 'react';
import Cards from '@/app/ui/dashboard/cards';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';

export default function Page() {
  return (
    <main>
      <h1 className="mb-4 text-xl font-semibold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="md:col-span-4">
          <Cards />
        </div>
        <div className="md:col-span-2">
          {/* <RevenueChart /> */}
        </div>
        <div className="md:col-span-2">
          {/* <LatestInvoices /> */}
        </div>
      </div>
    </main>
  );
}


