"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/component/ui/card';
import { Button } from '@/components/component/ui/button';
import ActionLoader from '@/components/reusables/ActionLoader';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function VerifyIDCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('id');
const { data, error, isLoading } = useSWR(
    cardId ? `http://localhost:5000/api/verify-card/${cardId}` : null,
    // cardId ? `https://oma-backend-1.onrender.com/verify-card/${cardId}` : null,
    fetcher,
    {
      revalidateOnFocus: false, // Don't revalidate when window gets focus
      shouldRetryOnError: false, // Don't retry on error
    }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ActionLoader isVisible={true} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-red-500">Verification Error</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">{error}</p>
            <Button onClick={() => router.push('/')}>Return Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }
console.log(data)
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className={`text-center ${data?.isValid ? 'text-green-500' : 'text-red-500'}`}>
            {data?.isValid ? 'VALID ID CARD' : 'INVALID ID CARD'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data?.isValid ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-green-500">
                  <Image
                    src={data?.card?.member?.image}
                    alt="Member photo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Full Name:</p>
                  <p>{data?.card?.member?.firstName} {data?.card?.member?.lastName}</p>
                </div>
                <div>
                  <p className="font-semibold">ID Number:</p>
                  <p>{data?.card?.cardId}</p>
                </div>
                <div>
                  <p className="font-semibold">Issued Date:</p>
                  <p>{formatDate(data?.card?.issueDate)}</p>
                </div>
                <div>
                  <p className="font-semibold">Expiry Date:</p>
                  <p>{formatDate(data?.card?.expiryDate)}</p>
                </div>
                <div>
                  <p className="font-semibold">Status:</p>
                  <p className="text-green-500 font-bold">Active</p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Image
                  src={data?.card?.qrCodeUrl}
                  alt="Verification QR Code"
                  width={120}
                  height={120}
                />
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                Verified on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
              </p>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <p>The ID card with number <strong>{cardId}</strong> could not be verified.</p>
              <p>Possible reasons:</p>
              <ul className="list-disc text-left max-w-md mx-auto space-y-2">
                <li>The ID card does not exist in our system</li>
                <li>The ID card has been revoked or suspended</li>
                <li>The ID card has expired</li>
                <li>There was an error processing your request</li>
              </ul>
              <div className="pt-4">
                <Button onClick={() => router.push('/contact')}>Contact Support</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}